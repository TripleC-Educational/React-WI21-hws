# Homework 2

在本次作业中，你需要完成一个基础的 ```TODO list``` app  
具体完成后的样子请参考：[这个链接](https://educational-basic-todos.dekunma.repl.co/)

## 详述
- 你需要完成一个 ```TODO``` class （对应的文件在 ```src/TODO.js``` 这个目录）  
    你可以向 ```TODO``` 这个 component 传入一个 ```props```，名称自定，作为这个TODO的内容  
    每一个 ```TODO``` 的初始状态是 ```in progress```  （状态就是 TODO的内容 后面的词组）  
    每一个 ```TODO``` 里有两个 ```button```，其中一个是 ```toggle```，另一个是 ```delete```。你可以用它们来改变当前这个 ```TODO``` 的状态  
    点击 ```toggle``` 的时候，```TODO``` 后面的状态会在 ```in progress``` 和 ```completed``` 之间切换  
    点击 ```delete``` 之后，```TODO``` 的状态会变成 ```deleted```，且之后再点击它的 ```in progress``` 和 ```delete``` 都不会有任何反应  
- 举例：  
    比方说我在 ```App.js``` 里面用了三个 ```TODO``` component：  
    (这里的 ```taskName``` 可以改成其他任何名字)
    ```HTML
    <TODO taskName='Do the laundry' />
    <TODO taskName='Do homeworks' />
    <TODO taskName='Move to the Mars' />
    ```
    这就会 render 上面的示例的链接中的那三个 TODOs

- 试着加入一些CSS，让同一个 ```TODO``` 显示在同一排