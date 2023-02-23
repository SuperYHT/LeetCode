var calcEquation = function (equations, values, queries) {
    let nvars = 0;
    const variables = new Map();

    const n = equations.length;
    for (let i = 0; i < n; i++) {
        if (!variables.has(equations[i][0])) {
            variables.set(equations[i][0], nvars++);
        }
        if (!variables.has(equations[i][1])) {
            variables.set(equations[i][1], nvars++);
        }
    }

    // 对于每个点，存储其直接连接到的所有点及对应的权值
    const edges = new Array(nvars).fill(0);
    for (let i = 0; i < nvars; i++) {
        edges[i] = [];
    }
    for (let i = 0; i < n; i++) {
        const va = variables.get(equations[i][0]), vb = variables.get(equations[i][1]);
        edges[va].push([vb, values[i]]);
        edges[vb].push([va, 1.0 / values[i]]);
    }

    const queriesCount = queries.length;
    const ret = [];
    for (let i = 0; i < queriesCount; i++) {
        const query = queries[i];
        let result = -1.0;
        if (variables.has(query[0]) && variables.has(query[1])) {
            const ia = variables.get(query[0]), ib = variables.get(query[1]);
            if (ia === ib) {
                result = 1.0;
            } else {
                const points = [];
                points.push(ia);
                const ratios = new Array(nvars).fill(-1.0);
                ratios[ia] = 1.0;

                while (points.length && ratios[ib] < 0) {
                    const x = points.pop();
                    for (const [y, val] of edges[x]) {
                        if (ratios[y] < 0) {
                            ratios[y] = ratios[x] * val;
                            points.push(y);
                        }
                    }
                }
                result = ratios[ib];
            }
        }
        ret[i] = result;
    }
    return ret;
};
const ret = calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]);
console.log(ret);

class Graph {
    constructor() {
        this.nodes = new Map();
        //this.edges = new Set();
    }
}
class Node {
    constructor(value) {
        this.value = value;
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
var calcEquation2 = function (equations, values, queries) {
    const graph = new Graph();
    //构建图
    for (let i = 0; i < equations.length; i++) {
        if (!graph.nodes.get(equations[i][0])) {
            const fromNode = new Node(equations[i][0]);
            const fromEdge = new Edge(values[i], equations[i][0], equations[i][1]);
            fromNode.nexts.push(equations[i][1]);
            fromNode.edges.push(fromEdge);
            graph.nodes.set(equations[i][0], fromNode);
        } else if (!graph.nodes.get(equations[i][1])) {
            const toNode = new Node(equations[i][1]);
            const toEdge = new Edge(1.0 / values[i], equations[i][1], equations[i][0]);
            toNode.nexts.push(equations[i][0]);
            toNode.edges.push(toEdge);
            graph.nodes.set(equations[i][1], toNode);
        } else if (graph.nodes.get(equations[i][0]).nexts.indexOf(equations[i][1]) === -1) {
            const fromNode = graph.nodes.get(equations[i][0]);
            const fromEdge = new Edge(values[i], equations[i][0], equations[i][1]);
            fromNode.nexts.push(equations[i][1]);
            fromNode.edges.push(fromEdge);
            graph.nodes.set(equations[i][0], fromNode);
        } else if (graph.nodes.get(equations[i][1]).nexts.indexOf(equations[i][0]) === -1) {
            const toNode = graph.nodes.get(equations[i][1]);
            const toEdge = new Edge(1.0 / values[i], equations[i][1], equations[i][0]);
            toNode.nexts.push(equations[i][0]);
            toNode.edges.push(toEdge);
            graph.nodes.set(equations[i][1], toNode);
        }
    }
    let ans = []
    const dfs = (graph, from, to) => {
        let result = -1.0;
        if (graph.nodes.get(from) && graph.nodes.get(to)) {
            let set = new Set();
            set.add(from);
            const stack = []
            stack.push(from);
            const visited = [];
            visited.push(from);
            while (stack.length) {
                const curr = stack.pop();
                if(curr===to){
                    break;
                }
                for (let next in graph.nodes.get(curr).nexts) {
                    if (!set.has(next)) {
                        const e = graph.nodes.get(curr).edges(graph.nodes.next)
                        stack.push(curr);
                        stack.push(next);
                        set.add(next);
                    }

                }

            }
        }
        return result;
    }
    for (let i = 0; i < queriesCount; i++) {
        const result = dfs(graph, queriesCount[i][0], queriesCount[i][1]);
        ans.push(result);
    }
    return ans;
};

let ans = calcEquation2([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]);
console.log(ans);