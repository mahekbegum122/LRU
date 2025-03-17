// // Doubly Linked List Node
// class DllNode {
//     constructor(key, value) {
//       this.key = key;
//       this.value = value;
//       this.prev = null;
//       this.next = null;
//     }
//   }
  
//   // LRU Cache using Doubly Linked List
//   class LRUCache {
//     constructor(capacity) {
//       this.capacity = capacity;
//       this.cache = new Map();
//       this.head = new DllNode(null, null);  // Dummy head
//       this.tail = new DllNode(null, null);  // Dummy tail
//       this.head.next = this.tail;
//       this.tail.prev = this.head;
//     }
  
//     // Add node to the front (most recently used)
//     addNode(node) {
//       node.prev = this.head;
//       node.next = this.head.next;
//       this.head.next.prev = node;
//       this.head.next = node;
//     }
  
//     // Remove a node from the linked list
//     removeNode(node) {
//       const prev = node.prev;
//       const next = node.next;
//       prev.next = next;
//       next.prev = prev;
//     }
  
//     // Move a node to the front (most recently used)
//     moveToHead(node) {
//       this.removeNode(node);
//       this.addNode(node);
//     }
  
//     // Remove the least recently used (LRU) node
//     popTail() {
//       const res = this.tail.prev;
//       this.removeNode(res);
//       return res;
//     }
  
//     // Get value of key
//     get(key) {
//       if (!this.cache.has(key)) return -1;
//       const node = this.cache.get(key);
//       this.moveToHead(node);
//       return node.value;
//     }
  
//     // Put key-value pair into the cache
//     put(key, value) {
//       if (this.cache.has(key)) {
//         const node = this.cache.get(key);
//         node.value = value;
//         this.moveToHead(node);
//       } else {
//         const node = new DllNode(key, value);
//         this.cache.set(key, node);
//         this.addNode(node);
        
//         if (this.cache.size > this.capacity) {
//           const tail = this.popTail();
//           this.cache.delete(tail.key);
//         }
//       }
//     }
  
//     // Display the cache as a doubly linked list
//     display() {
//       const nodes = [];
//       let current = this.head.next;
//       while (current !== this.tail) {
//         nodes.push(`[${current.key}: ${current.value}]`);
//         current = current.next;
//       }
//       return nodes.join(' <-> ');
//     }
//   }
  
//   let lruCache = null;
  
//   function setCacheSize() {
//     const cacheSize = parseInt(document.getElementById('cacheSize').value, 10);
  
//     if (isNaN(cacheSize) || cacheSize <= 0) {
//       alert("Please enter a valid cache size.");
//       return;
//     }
  
//     lruCache = new LRUCache(cacheSize);
//     document.getElementById('itemControls').style.display = 'block'; // Show key-value input
//     document.getElementById('cacheSize').disabled = true; // Disable cache size input
//     document.getElementById('cacheSize').value = ''; // Clear the input field
//   }
  
//   function addCacheItem() {
//     const cacheKey = document.getElementById('cacheKey').value.trim();
//     const cacheValue = document.getElementById('cacheValue').value.trim();
  
//     if (!cacheKey || !cacheValue) return;
  
//     lruCache.put(cacheKey, cacheValue);
//     document.getElementById('cacheKey').value = ''; // Clear key input
//     document.getElementById('cacheValue').value = ''; // Clear value input
//     updateCacheDisplay();
//   }
  
//   function getCacheItem() {
//     const cacheKey = document.getElementById('cacheKey').value.trim();
  
//     if (!cacheKey) return;
  
//     const value = lruCache.get(cacheKey);
//     if (value !== -1) {
//       alert(`Value for key '${cacheKey}': ${value}`);
//     } else {
//       alert(`Key '${cacheKey}' not found in cache.`);
//     }
//     updateCacheDisplay();
//   }
  
//   function updateCacheDisplay() {
//     const cacheList = document.getElementById('cacheList');
//     const cacheData = lruCache.display();
//     cacheList.innerHTML = ''; // Clear current cache display
  
//     const listItem = document.createElement('li');
//     listItem.textContent = cacheData;
//     cacheList.appendChild(listItem);
//   }
class DllNode {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  // LRU Cache using Doubly Linked List
  class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
      this.head = new DllNode(null, null);  // Dummy head
      this.tail = new DllNode(null, null);  // Dummy tail
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }
  
    // Add node to the front (most recently used)
    addNode(node) {
      node.prev = this.head;
      node.next = this.head.next;
      this.head.next.prev = node;
      this.head.next = node;
    }
  
    // Remove a node from the linked list
    removeNode(node) {
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
    }
  
    // Move a node to the front (most recently used)
    moveToHead(node) {
      this.removeNode(node);
      this.addNode(node);
    }
  
    // Remove the least recently used (LRU) node
    popTail() {
      const res = this.tail.prev;
      this.removeNode(res);
      return res;
    }
  
    // Get value of key
    get(key) {
      if (!this.cache.has(key)) return -1;
      const node = this.cache.get(key);
      this.moveToHead(node);
      return node.value;
    }
  
    // Put key-value pair into the cache
    put(key, value) {
      if (this.cache.has(key)) {
        const node = this.cache.get(key);
        node.value = value;
        this.moveToHead(node);
      } else {
        const node = new DllNode(key, value);
        this.cache.set(key, node);
        this.addNode(node);
  
        if (this.cache.size > this.capacity) {
          const tail = this.popTail();
          this.cache.delete(tail.key);
        }
      }
    }
  
    // Display the cache as a doubly linked list
    display() {
      const nodes = [];
      let current = this.head.next;
      while (current !== this.tail) {
        nodes.push(`[${current.key}: ${current.value}]`);
        current = current.next;
      }
      return nodes.join(' <-> ');
    }
  }
  
  let lruCache = null;
  
  function setCacheSize() {
    const cacheSize = parseInt(document.getElementById('cacheSize').value, 10);
  
    if (isNaN(cacheSize) || cacheSize <= 0) {
      alert("Please enter a valid cache size.");
      return;
    }
  
    lruCache = new LRUCache(cacheSize);
    
    // Show the capacity display and hide the size input
    document.getElementById('cacheSizeControl').style.display = 'none';
    document.getElementById('itemControls').style.display = 'block';
    document.getElementById('cacheCapacity').style.display = 'block';
    
    // Display the capacity in the UI
    document.getElementById('capacityDisplay').textContent = cacheSize;
  
    document.getElementById('cacheSize').disabled = true; // Disable cache size input
    document.getElementById('cacheSize').value = ''; // Clear the input field
  }
  
  function addCacheItem() {
    const cacheKey = document.getElementById('cacheKey').value.trim();
    const cacheValue = document.getElementById('cacheValue').value.trim();
  
    if (!cacheKey || !cacheValue) return;
  
    lruCache.put(cacheKey, cacheValue);
    document.getElementById('cacheKey').value = ''; // Clear key input
    document.getElementById('cacheValue').value = ''; // Clear value input
    updateCacheDisplay();
  }
  
  function getCacheItem() {
    const cacheKey = document.getElementById('cacheKey').value.trim();
  
    if (!cacheKey) return;
  
    const value = lruCache.get(cacheKey);
    if (value !== -1) {
      alert(`Value for key '${cacheKey}': ${value}`);
    } else {
      alert(`Key '${cacheKey}' not found in cache.`);
    }
    updateCacheDisplay();
  }
  
  function updateCacheDisplay() {
    const cacheList = document.getElementById('cacheList');
    const cacheData = lruCache.display();
    cacheList.innerHTML = ''; // Clear current cache display
  
    const listItem = document.createElement('li');
    listItem.textContent = cacheData;
    cacheList.appendChild(listItem);
  }
  