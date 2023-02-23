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

