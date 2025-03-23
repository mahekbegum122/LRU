Description
This project implements an LRU (Least Recently Used) Cache in java. The LRU Cache is a data structure that stores a limited number of key-value pairs, with the ability to efficiently retrieve values and ensure that the least recently used items are removed when the cache reaches its capacity.

Approach
In this implementation, we do not use a single or circular linked list. Instead, we use a doubly linked list combined with a hash map (or dictionary) to achieve efficient constant time complexity (O(1)) for both get and put operations.

The doubly linked list allows us to:
Maintain the order of items based on their usage: The most recently used items are moved to the front (head), while the least recently used items are moved to the back (tail).
Efficiently remove items: By keeping track of both the head and the tail of the doubly linked list, we can easily remove the least recently used item (tail) when the cache is full.
The hash map provides constant time access to the nodes in the doubly linked list. Each key in the cache is mapped to a node in the linked list, allowing us to quickly update the position of the item when it is accessed or modified.

How It Works:
Get Operation: When a key is accessed (via the get method), it is moved to the front of the doubly linked list to mark it as the most recently used item.
Put Operation: When a new key-value pair is inserted (via the put method), the key-value pair is added to the front of the doubly linked list. If the cache is full, the least recently used item (the one at the tail of the list) is evicted.

Key Features:
O(1) Time Complexity for both get and put operations.
The cache maintains a fixed capacity and evicts the least recently used item when the capacity is exceeded.
Efficient memory management with constant-time access and updates.
