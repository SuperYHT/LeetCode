public class Main {
    public static class LFUCache {

        int minFreq,capacity;
        Map<Integer,Node> keyTalbe;
        Map<Integer, DLinkedList> freqTable;

        public LFUCache(int capacity) {
            this.capacity = capacity;
            this.minFreq = 0;
            keyTalbe = new HashMap<>();
            freqTable = new HashMap<>();
        }
        public void print() {
            boolean flag = true;
            Set<Integer> freqs = freqTable.keySet();
            ArrayList<Integer> list = new ArrayList<>(freqs);
            list.sort(Integer::compareTo);
            for (int i = list.size() - 1; i >=0; i--) {
                Integer key = list.get(i);
                DLinkedList linkedList = freqTable.get(key);
                if (linkedList.size != 0) {
                    Node cur = linkedList.dumpHead.next;
                    while (cur != null &&  cur != linkedList.dumpTail) {
                        if (flag){
                            System.out.printf("%d",cur.value);
                            flag = false;
                        }else
                            System.out.printf(" %d",cur.value);
                        cur = cur.next;
                    }
                }

            }
        }
        public int get(int key) {
            Node node = keyTalbe.get(key);
            if(node == null) {
                return -1;
            }
            freqTable.get(node.freq).remove(node);
            if(freqTable.get(node.freq).size == 0) {
                freqTable.remove(node.freq);
                if(minFreq == node.freq) {
                    minFreq += 1;
                }
            }
            DLinkedList list = freqTable.getOrDefault(node.freq+1,new DLinkedList());
            list.addFirst(node);
            node.freq += 1;
            freqTable.put(node.freq,list);
            return node.value;
        }

        public void put(int key, int value) {
            if(capacity == 0) {
                return;
            }
            Node node = keyTalbe.get(key);
            if(node == null) {
                // is full
                if(keyTalbe.size() == capacity) {
                    Node tailNode = freqTable.get(minFreq).getTail();
                    keyTalbe.remove(tailNode.key);
                    freqTable.get(minFreq).remove(tailNode);
                    if(freqTable.get(minFreq).size == 0) {
                        freqTable.remove(minFreq);
                    }
                }
                DLinkedList list = freqTable.getOrDefault(1,new DLinkedList());
                Node newNode = new Node(key, value);
                list.addFirst(newNode);
                freqTable.put(1,list);
                keyTalbe.put(key, newNode);
                minFreq = 1;
            }else {
                freqTable.get(node.freq).remove(node);
                if(freqTable.get(node.freq).size == 0) {
                    freqTable.remove(node.freq);
                    if(minFreq == node.freq) {
                        minFreq += 1;
                    }
                }
                node.freq += 1;
                node.value = value;
                DLinkedList list = freqTable.getOrDefault(node.freq, new DLinkedList());
                list.addFirst(node);
                freqTable.put(node.freq, list);
            }
        }

        public static class Node {
            public int key;
            public int value;
            public int freq;
            public Node prev;
            public Node next;
            public Node(int key, int value) {
                this.key = key;
                this.value = value;
                this.freq = 1;
            }
        }
        public static class DLinkedList {
            private Node dumpHead;
            private Node dumpTail;
            public int size;
            public DLinkedList() {
                dumpHead = new Node(-1,-1);
                dumpTail = new Node(-1,-1);
                dumpHead.next = dumpTail;
                dumpTail.prev = dumpHead;
                size = 0;
            }
            public void remove(Node node) {
                node.prev.next = node.next;
                node.next.prev = node.prev;
                size--;
            }
            public void addFirst(Node node) {
                node.next = dumpHead.next;
                node.prev = dumpHead;
                dumpHead.next.prev = node;
                dumpHead.next = node;
                size++;
            }
            public Node getTail() {
                return dumpTail.prev;
            }
            public Node getHead() {
                return dumpHead.next;
            }
        }
    }
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int K = in.nextInt();
        LFUCache cache = new LFUCache(K);
        int L = in.nextInt();
        in.nextLine();
        for (int i = 0; i < L; i++) {
            String line = in.nextLine();
            String[] lineString = line.split(" ");

            if (lineString[0].equalsIgnoreCase("S")){
                int M = Integer.parseInt(lineString[1]);// 类型
                int N = Integer.parseInt(lineString[2]); // 价格
                cache.put(M,N);
            }else if (lineString[0].equalsIgnoreCase("U")) {
                int M = Integer.parseInt(lineString[1]);// 类型
                cache.get(M);
            }
        }
        cache.print();
    }
}
