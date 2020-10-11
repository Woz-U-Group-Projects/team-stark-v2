import React from 'react';
import '../index.css';
import '../task.min.css';
  
const Home = () => (
    <div>
      <h2>Home</h2>
      <p>
          Welcome! 
          This Bill Payment application has been designed to enable YOU to manage YOUR budget by capturing YOUR bill names, 
          addresses, account numbers, amounts owed, due dates and payment schedule dates. 
          YOU can also capture YOUR credit card account numbers, interest rates, billing cycles and minimum required payments and 
          use this information to calculate YOUR total payments and interest amounts given length of time taken to pay off YOUR 
          credit cards. 
          Please be assured that our development staff have taken YOUR security and YOUR privacy needs into consideration.
      </p>
      <div className="row justify-content-center">
        <span id="image">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXx3_7HGNAdOSVLJPmkpMm_gI0MBiCmeldlA&usqp=CAU'/>
        </span> 
      </div>
    </div>
  );
    
export default Home;