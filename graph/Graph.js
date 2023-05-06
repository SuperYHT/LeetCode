
// matrix：邻接矩阵，三个变量分别表示：权重、起始结点、终点结点
// 转换步骤：

// 1. 首先判断 from 结点和 to 结点是否存在，如果不存在首先加到 Graph.nodes中
// 2. 然后拿到 from 结点和 to 结点，构造 Edge
// 3. 让 from 结点 out++ ；to 结点 in++
// 4. 让 from 结点 nexts 加上 to 结点，edges 加上 edge
// 5. 让 Graph.edges 加上 edge

class Graph {
    constructor() {
        this.nodes = new Map();
        this.edges = new Set();
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.in = 0;
        this.out = 0;
        this.nexts = new Array();
        this.edges = new Array();
    }
}
class Edge {
    constructor(weight, from, to) {
        this.weight = weight;
        this.from = from;
        this.to = to;
    }
}

const graphGenerator = (matrix) => {
    // matrix 所有的边
    // N*3 的矩阵
    // [weight, from节点上面的值，to节点上面的值]
    let graph = new Graph()
    for (let i = 0; i < matrix.length; i++) {
        // 拿到每一条边， matrix[i] 
        let weight = matrix[i][0]
        let from = matrix[i][1]
        let to = matrix[i][2]
        if (!graph.nodes.has(from)) {
            graph.nodes.set(from, new Node(from))
        }
        if (!graph.nodes.has(to)) {
            graph.nodes.set(to, new Node(to))
        }
        let fromNode = graph.nodes.get(from)
        let toNode = graph.nodes.get(to)
        let newEdge = new Edge(weight, fromNode, toNode)
        fromNode.nexts.push(toNode)
        fromNode.out++
        toNode.in++
        fromNode.edges.push(newEdge)
        graph.edges.add(newEdge)
    }
    return graph

}



//207. 课程表
const canFinish = (numCourses, prerequisites) => {
    let count = 0;
    const inDegree = new Array(numCourses).fill(0); // 入度数组
    const nodes = {};                                 // 邻接表
    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++;              // 求课的初始入度值
        if (nodes[prerequisites[i][1]]) {               // 当前课已经存在于邻接表
            nodes[prerequisites[i][1]].push(prerequisites[i][0]); // 添加依赖它的后续课
        } else {                                      // 当前课不存在于邻接表
            nodes[prerequisites[i][1]] = [prerequisites[i][0]];
        }
    }
    const queue = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            queue.push(i)
        }
    }
    while (queue.length) {
        let out = queue.shift()
        count++;
        let nextNodes = nodes[out];
        if (nextNodes && nextNodes.length) {
            for (let i = 0; i < nextNodes.length; i++) {
                inDegree[nextNodes[i]]--;
                if (inDegree[nextNodes[i]] === 0) {
                    queue.push(nextNodes[i])
                }
            }
        }

    }
    return out === numCourses;
};

