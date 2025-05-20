// App.js
import React from 'react';
import SNSPost from './SNSPost';
import SNSPost2 from './SNSPost2';
import './App.css';  // 确保这个路径正确

function App() {
    return (
        <div>
            <h2>Name: DingJiaye</h2>
            <h2>Student ID: 26002304561</h2>
            <h2>Mini SNS Feed </h2>

            <SNSPost content="The only way to do great work is to love what you do." />  {/* Steve Jobs - 英文 */}
            <SNSPost content="失敗は成功のもと。" />  {/* 日本諺 - 日语（失败乃成功之母） */}
            <SNSPost2 content="知之者不如好之者，好之者不如乐之者。" />  {/* 孔子 - 中文 */}
            <SNSPost2 content="Il n'y a qu'un bonheur dans la vie, c'est d'aimer et d'être aimé." />  {/* George Sand - 法语：人生中唯一的幸福，就是去爱与被爱 */}

        </div>
    );
}

export default App;
