#include<unordered_map>
#include<iostream>
#include<list>
#include<vector>
#include<queue>

using namespace std;

void bfs(unordered_map<int ,list<int>> &graph,unordered_map<int,bool> &visited,vector<int> &ans, int node){
    queue<int> qu;
    qu.push(node);
    visited[node]=1;
    while(!qu.empty()){
        int a = qu.front();
        qu.pop();
        ans.push_back(a);
        for(auto i : graph[a]){
            if(!visited[i]){
                qu.push(i);
                visited[i]=1;
            }
        }
    }
}

void dfs(unordered_map<int, list<int>> &graph,unordered_map<int,bool> &visited,vector<int> &component,int node){
    component.push_back(node);
    visited[node]=1;
    for(auto i:graph[node]){
        if(!visited[i]){
            dfs(graph,visited,component,i);
        }
    }
}

class graph{
    public:
    unordered_map<int ,list<int>> graph;

    void addEdge(int u,int v){
        graph[u].push_back(v);
        graph[v].push_back(u);
    }

    void printGraph(){
        for(auto i:graph){
            cout<<i.first<<"->";
            for(auto j:i.second){
                cout<<j<<" ";
            }
            cout<<endl;
        }
    }

    vector<int> BFS(int vertex){
        unordered_map<int,bool> visited;
        vector<int> ans;
        for(int i=0;i<vertex;i++){
            if(!visited[i]){
                // bfs(vertex,ans,i,);
                bfs(graph,visited,ans,i);
            }
        }
        return ans;
    }
    vector<vector<int>> DFS(int vertex){
        unordered_map<int,bool> visited;
        vector<vector<int>> ans;
        for(int i=0;i<vertex;i++){
            if(!visited[i]){
                vector<int> component;
                dfs(graph,visited,component,i);
                ans.push_back(component);
            }
        }
        return ans;
    }
};


int main(){
    graph g;
    g.addEdge(1,0);
    g.addEdge(4,0);
    g.addEdge(1,2);
    g.addEdge(1,3);
    g.addEdge(1,4);
    g.addEdge(2,4);
    g.addEdge(2,3);
    g.addEdge(3,4);
    g.addEdge(5,6);
    g.addEdge(8,6);
    g.addEdge(5,7);
    g.addEdge(8,7);
    g.addEdge(5,8);
    // g.printGraph();

    // vector<int> a = g.BFS(8);
    // for(int i=0;i<a.size();i++){
        // cout<<a[i]<<" ";
    // }
    vector<vector<int>> dfst = g.DFS(8);
    for(int i=0;i<dfst.size();i++){
        for(int j=0;j<dfst[i].size();j++){
            cout<<dfst[i][j]<<" ";
        }
        cout<<endl;
    }
}