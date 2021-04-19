# Final Project

恭喜你已经完成了React课程的学习！  
如果你认真看完了所有教程，并花时间理解了它们，那么我很确定你现在有了独立完成一个React项目的能力。  
所以在这个 Final Project 中，你将（基本）独立完成一个 React App，下面是对本项目的详细说明。

## 简介

在这个 Final Project 中，你将完成一个 Weather App  
用户可以在这个 Weather App 中查看全球任何一个城市现在的天气，和未来的天气预报  
<br/>
你可以在这个网址看到项目完成之后的样子: [weather2.ucsdtriplec.org](https://weather2.ucsdtriplec.org)  
建议在开始之前可以先去这个网页体验一下这个App，以便对你需要实现的功能有更好的理解。

![demo.png](https://i.loli.net/2021/04/18/HXw7uxeMDYd4bva.png)

## Due date
- 5/7/2021

## Get started
### Step 1
获取并启动项目
- 老样子，在你本地的项目目录里 ```git pull upstream```， 你会获取到一个叫 final-project 的文件夹  
- 进入 final-project
- 运行 ```npm install```
- 完成之后 ```npm start```，然后你应该会看到这个界面
![starter_1.png](https://i.loli.net/2021/04/18/IBHvk184wMNaYAf.png)

<br/>

### Step 2
完成 Forcast 页面
- 这个页面在 /screens/Forcast 目录

### Step 2.1
实现进入这个页面时，显示某个城市的天气预报数据
- 在这个页面中，用户如果直接进入这个页面，不进行任何操作，则页面上会显示某一个城市的天气预报数据 (在 weather2.ucsdtriplec.org 这个demo里，进入这个页面显示的城市是成都。你可以选择显示任意一个城市的数据)
- 你需要在 ```React.useEffect()``` 这个function里，用 ```getData()``` 获取数据，然后把获取到的数据储存在 state 里面
- 你需要完成 ```/screens/Forcast/ForcastCard.js``` 这个 component。这个component对应到demo上，就是一张显示天气预报数据的Card
![forcast_card.jpg](https://i.loli.net/2021/04/18/pyEvaHmWNet6dZL.jpg)
- 你从API获取到的天气数据是以三个小时为单位的 ```array```，你需要用 ```.map()``` 把每条数据传到一个 ForcastCard 里，然后在页面上显示出来

### Step 2.2
实现显示用户输入的城市的天气预报数据
- 用户在右上角输入框输入一个城市的名字，然后敲回车，如果这个城市存在，则页面上改为显示这个新城市的天气数据。如果输入的城市不存在，需要用 ```alert()``` 来报错（可以在demo里自己试试）
- 你需要获取用户在 ```<AppBar />``` 这个 component 里输入的城市，并且需要在用户敲回车的时候清空输入框，并触发 ```getData()``` 来获取数据
- ```<AppBar />``` 的 API 如下：
    - ```value```   
    这个 attribute 控制现在 AppBar 的 输入框 里的值，接收一个 String  
    e.g.   
        ```html
        <AppBar value="test"/>
        ```   
        则输入框里会显示 test  
        hint: 如果你在 ```value``` 里传入的是一个 state，那么这个state变化的时候，输入框里显示的内容也会相应变化
    - ```onChange```  
    这个 attribute 接收一个 function。当输入框里的内容发生变化的时候触发这个function  
    这个 function 唯一的 argument 是一个 ```event``` object  
    hint: 我们可以用一个state来存储input value，然后在 ```onChange``` 里更新这个 state。这样这个state里存储的值就一直会是我们输入框里的值
    - ```onKeyDown```  
    这个 attribute 接收一个 function。当用于按下任意一个按键，这个function会被触发  
    hint: 你可以向 ```onKeyDown``` 里面传入你修改过后的 ```handleOnKeyDown()``` function，实现用户敲回车键之后触发某些效果


### Step 3
完成 ```Current``` 页面
- 完成 ```/screens/Current/CurrentCard.js```， 用于显示每一个城市的实时天气数据。
- 实现用户在右上角输入框输入一个城市的名字，则这个城市的天气数据会以一张 ```CurrentCard``` 的形式，被加到 /current 这个页面中

### Step 4
完成 ```About``` 页面  
简单介绍一下你的 Weather App，内容不限

<br/>

## 其他说明
1. 所有页面***不需要***与 [demo](https://weather2.ucsdtriplec.org) 长得完全。只要功能一样即可。

2. 可以使用包括但不限于```Material UI```, ```Semantic UI```等任意UI库来完成。
3. 建议开始之前认真研究一下调用api返回的数据，参考```openweathermap.org```的[官方文档](https://openweathermap.org/)。也可以把获取的数据 ```console.log()``` 出来看一下。
4. API获取每天有1000次的限制，如果在配置正确的情况下无法获取数据，可能是已经超过上限了。
5. 粗略估计，完整完成这个项目需要花费大概 6 - 10 小时 

## 其他任何问题
可以直接在微信群上问，或者私戳我  
或随时写邮件至 ```William@dekun.me``` 提问