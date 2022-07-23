// use ZEn-class; switch to zen-class database;

/*users*/

db.users.insertMany([
    {
      userid: 1,
      name: "ram",
      email: "ram@gmail.com",
      mentorid: 1,
    },
    {
      userid: 2,
      name: "kumar",
      email: "kumar@gmail.com",
      mentorid: 2,
    },
    {
      userid: 3,
      name: "tamil",
      email: "tamil@gmail.com",
      mentorid: 3,
    },
    {
      userid: 4,
      name: "Subash",
      email: "subash@gmail.com",
      mentorid: 1,
    },
    {
      userid: 5,
      name: "gopi",
      email: "gopi@gmail.com",
      mentorid: 2,
    },
  ]);
  
  /*codekata*/
  
  db.codekata.insertMany([
    {
      userid: 1,
      problems: 50,
    },
    {
      userid: 2,
      problems: 60,
    },
    {
      userid: 3,
      problems: 70,
    },
    {
      userid: 4,
      problems: 20,
    },
    {
      userid: 5,
      problems: 30,
    },
  ]);
  
  
  /*topics*/
  
  db.topics.insertMany([
    {
      topicid: 1,
      topic: "html",
      topic_date: new Date("6-oct-2021"),
    },
    {
      topicid: 2,
      topic: "css",
      topic_date: new Date("11-oct-2021"),
    },
    {
      topicid: 3,
      topic: "Javascript",
      topic_date: new Date("14-oct-2021"),
    },
    {
      topicid: 4,
      topic: "React",
      topic_date: new Date("25-oct-2021"),
    },
    {
      topicid: 5,
      topic: "NodeJs",
      topic_date: new Date("24-oct-2021"),
    },
  ]);
  
  
  /*tasks*/
  
  db.tasks.insertMany([
    {
      taskid: 1,
      topicid: 1,
      userid: 1,
      task: "html task",
      due_date: new Date("6-oct-2021"),
      submitted: false,
    },
    {
      taskid: 2,
      topicid: 2,
      userid: 2,
      task: "css task",
      due_date: new Date("11-oct-2021"),
      submitted: true,
    },
    {
      taskid: 3,
      topicid: 3,
      userid: 3,
      task: "Javascript task",
      due_date: new Date("14-oct-2021"),
      submitted: false,
    },
    {
      taskid: 4,
      topicid: 4,
      userid: 4,
      task: "React task",
      due_date: new Date("25-oct-2021"),
      submitted: true,
    },
    {
      taskid: 5,
      topicid: 5,
      userid: 5,
      task: "Node task",
      due_date: new Date("24-oct-2021"),
      submitted: false,
    },
  ]);
  
  /*attendance*/
  
  db.attendance.insertMany([
    {
      userid: 1,
      topicid: 1,
      attended: false,
    },
    {
      userid: 2,
      topicid: 2,
      attended: true,
    },
    {
      userid: 3,
      topicid: 3,
      attended: false,
    },
    {
      userid: 4,
      topicid: 4,
      attended: true,
    },
    {
      userid: 5,
      topicid: 5,
      attended: false,
    },
  ]);
  
 
  /*mentors*/
  
  db.mentors.insertMany([
    {
      mentorid: 1,
      mentorname: "yogiro",
      mentor_email: "yogiro@gmail.com",
    },
    {
      mentorid: 2,
      mentorname: "hanma",
      mentor_email: "hanma@gmail.com",
    },
    {
      mentorid: 3,
      mentorname: "baki",
      mentor_email: "baki@gmail.com",
    },
    {
      mentorid: 4,
      mentorname: "itathori",
      mentor_email: "itathori@gmail.com",
    },
    {
      mentorid: 5,
      mentorname: "zeitsu",
      mentor_email: "zeitsu@gmail.com",
    },
  ]);
  
  
  /*company drives*/
  
  db.comapnydrives.insertMany([
    {
      userid: 1,
      drive_date: new Date("14-oct-2021"),
      company: "Facebook",
    },
    {
      userid: 1,
      drive_date: new Date("18-oct-2021"),
      company: "you tube",
    },
    {
      userid: 2,
      drive_date: new Date("27-oct-2021"),
      company: "instagram",
    },
    {
      userid: 3,
      drive_date: new Date("29-oct-2021"),
      company: "twitter",
    },
    {
      userid: 4,
      drive_date: new Date("2-oct-2021"),
      company: "telegram",
    },
  ]);