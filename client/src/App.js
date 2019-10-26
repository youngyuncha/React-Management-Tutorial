import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customer =[
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '961121',
  'gender': '남자',
  'job': '학생'
},

{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '나나나',
  'birthday': '92323',
  'gender': '남자',
  'job': '군인'
},

{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '김김김',
  'birthday': '961123',
  'gender': '여자',
  'job': '백수'
}
]

class App extends Component {
  render(){
    return(
      <div>
    
    {
      customer.map(c=> {
        return (
          <Customer
          key={c.id}    //key로 각각의 값을 구별함 id로
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          job={c.job}

          />
        );
      })
    }

    </div>
    );
  }
}

export default App;
