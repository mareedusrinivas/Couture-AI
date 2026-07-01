const DB_NAME = 'CoutureAIDB';
const DB_VERSION = 1;
const STORE_NAME = 'wardrobe';

export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
};

export const saveImageToDB = async (username, imageBlob) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    const item = {
      username: username || 'guest',
      image: imageBlob,
      timestamp: Date.now()
    };

    const request = store.add(item);

    request.onsuccess = () => {
      resolve(true);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
};

export const getImagesFromDB = async (username) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = (event) => {
      const allItems = event.target.result || [];
      const userItems = allItems
        .filter(item => item.username === (username || 'guest'))
        .sort((a, b) => b.timestamp - a.timestamp); // latest first
      resolve(userItems);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
};

export const deleteImageFromDB = async (id) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(id);

    request.onsuccess = () => {
      resolve(true);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
};

export const clearWardrobeFromDB = async (username) => {
  const db = await initDB();
  const userItems = await getImagesFromDB(username);
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    
    for (const item of userItems) {
      store.delete(item.id);
    }

    transaction.oncomplete = () => {
      resolve(true);
    };

    transaction.onerror = (event) => {
      reject(event.target.error);
    };
  });
};

export const migrateLocalStorageToDB = async (username) => {
  try {
    const saved = localStorage.getItem('wardrobeImages');
    if (saved) {
      const base64Images = JSON.parse(saved) || [];
      for (const base64 of base64Images) {
        const res = await fetch(base64);
        const blob = await res.blob();
        await saveImageToDB(username, blob);
      }
      localStorage.removeItem('wardrobeImages');
    }
  } catch (err) {
    console.error('Failed to migrate wardrobe images:', err);
  }
};
