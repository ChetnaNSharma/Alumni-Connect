import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class SimpleForm extends Component {
    render() {
      return (
        <ChatBot 
        recoginiton={true}
        speechSynthesis=
        {{enable:speechSynthesis,
        lang:'en'}}
          steps={[
            {
              id: '1',
              message: 'Hi! Are you a Student or Alumni?',
              trigger: 'profession',
            },
            {
              id: 'profession',
              options: [
                { value: 'Student', label: 'Student', trigger: '21' },
                { value: 'Alumni', label: 'Alumni', trigger: '5' },
              ],
            },
            {
              id: '21',
              message : 'Hey! This platform is all about connecting you with an alumni and help you in getting better job opportunities. Do you like to continue?',
              trigger: 'interest',
            },
            {
              id: 'interest',
              options: [
                { value: 'YES', label: 'YES', trigger: '22' },
                { value: 'NO', label: 'NO', trigger: '23' },
              ],
            },
            {
              id: '23',
              message: 'Okay cool. Have a great day! ',
              end: true,
            },
            {
              id: '22',
              message: 'Talking about what you can do here: 1. Request for a job referral 2. Can get information regarding job availability that alumni may share. 3. Tips of preparation strategies by alumni to sail over desired professional fields. So yeah go ahead and build your connection. :) ',
              trigger: 'next',
            },
            {
              id: 'next',
              user: true,
              trigger: 'ques',
            },
            {
              id:'ques',
              message:'Would you like to know more?',
              trigger:'info'
            },
            {
                id: 'info',
                options: [
                    { value: 'YES', label: 'YES', trigger: 'more' },
                    { value: 'NO', label: 'NO', trigger: '23' },
                  ],
            },
            {
                id:'more',
                message:'More points: 1. You can also express yourself through write-ups, blogs, pictures, videos, ideas, help, appeals, or requests 2. Can Update Info about what is going on in college?. Sounds fun naah:)',
                trigger:'sol2'
            },
            {
            id: 'sol2',
            options: [
                { value: 'YES', label: 'Yaaayy', end: true},
                { value: 'NO', label: 'Cool!!', end: true },
            ],
            },
            {
              id:'5',
              message:'Want to know about this platform??',
              trigger:'opt'
            },
            {
              id:'opt',
              options:[
                {value:'YES',label:'Yes',trigger:'10'},
                {value:'No',label:'No',trigger:'23'}
              ]
            },
            {
              id: '10',
              message: 'This platform connects you with your college juniors. Go ahead help them with their carriers and We know You miss your college days. Surprise! There is whole different column where you can get all updates about your college. So go ahead and join this journey!',
              trigger: '35', 
            },
            {
              id:'35',
              user:true,
              trigger:'17'
            },
            {
              id: '17',
              message:"Hey! And don't forget to go through the new updates of your college :).",
              trigger: '29',
            },
            {
               id:'29',
               options:[
                 {value:'YES',label:'Perfect',trigger:'final'},
                 {value:'NO',label:'Fun',trigger:'final'}
              ]
            },
            {
              id: 'final',
              message:"Go ahead and build your network!!",
              end: true,
            }
          ]}
        />
      );
    }
}

  export default SimpleForm;

