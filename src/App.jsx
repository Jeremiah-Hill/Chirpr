import React, { useState } from "react";
import Timeline from './components/Timeline';

const App = () => {
const [newUsername, setNewUsername] = useState('');
const [newMsg, setNewMsg] = useState('');
const [forms, setForms] = useState([{
  username: '@funnybone',
  message: 'Hey, @CoolSkeleton95 wanna hear a joke?',
},
{
  username: '@CoolSkleton95',
  message: 'Sure, Why Not?',
},
{
  username: '@funnybone',
  message: 'Why did the skeleton go to the restaurant?',
},
{
  username: '@CoolSkeleton95',
  message: 'Hmmm... I got nothing, why did they go to the restaurant?',
},
{
  username: '@funnybone',
  message: 'So he could get a BONE meal! ;)',
},
{
  username: '@CoolSkeleton95',
  message: '*Internal Screaming*'
},
]);

let submitForm = () => {
  let newForm = {
  username: newUsername,
  message: newMsg
}

setForms([...forms, newForm])
emptyInputs()
}

let emptyInputs = () => {
  setNewUsername('')
  setNewMsg('')
}

let myForms = forms.map((form, id) => <Timeline key={id} form={form}/>); 

return (
  <>
  <div className="row m-4">
        <h1>Welcome to Undernet!</h1>
        <div className="col-2">
          <input type="text" id="un-input" value={newUsername} placeholder="Username" onChange={(e) => setNewUsername(e.target.value)}></input>
        </div>
        <div className="col-2">
          <input type="text" id="msg-input"  value={newMsg} placeholder="Say Something..." onChange={(e) => setNewMsg(e.target.value)}></input>
        </div>
        <div className="col-2">
            <button className="btn btn-primary" onClick={submitForm}>Submit</button>
        </div>
      </div>

      {myForms}
    </>
  );
};

export default App;
