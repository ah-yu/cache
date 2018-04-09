'use strict'

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

/**
 * LRUCache by doublelinklist and hashmap
 */
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity || Number.MAX_VALUE;
        this.head = null;
        this.tail = null;
        this.map = new Map();
    }

    _insertToEnd(node) {
        if (this.tail) {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        } else {
            this.head = this.tail = node;
        }
        this.map.set(node.key, node);

        while (this.map.size > this.capacity) {
            this.deleteHead();
        }
    }

    _deleteHead() {
        if (this.head) {
            const second = this.head.next;
            if (second) {
                this.head = next;
                next.previous = null;
                this.map.delete(this.head.data.key);
            } else {
                this.head = this.tail = null;
                this.map.clear();
            }
        } else {
            console.log('cache is empty');
        }
    }

    _moveToEnd(node) {
        if (!node) {
            console.log('not cache this value');
            return;
        }

        const {
            previous,
            next
        } = node;

        if (previous && next) {
            previous.next = next;
            next.previous = previous;
            node.previous = this.tail;
            this.tail = node;
        } else if (!previous && next) {
            next.previous = null;
            node.previous = this.tail;
        }

        node.next = null;
    }

    get(key) {
        const node = this.map.get(key);
        if (!node) {
            console.log('not cache that key-value');
            return undefined;
        } else {
            this._moveToEnd(node);
            return node.value;
        }
    }

    set(key, value) {
        if (this.map.has(key)) {
            console.log('already cache the same key');
            return;
        }
        const node = new Node(key, value);
        this._insertToEnd(node);
    }

    update(key, value) {
        const node = this.map.get(key);
        if (node) {
            node.value = value;
        } else {
            console.log('not cache this key');
        }
    }

    cleanup() {
        this.head = this.tail = null;
        this.map.clear();
    }
}

module.exports = LRUCache;