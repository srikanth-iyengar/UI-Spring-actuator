import React from 'react'
import RequestList from './HttpCalls/RequestList'
import {useEffect, useState } from "react"
import API from './API'
const HttpContent = () => {

  const [requests, setRequests] = useState([]);

  const timeConverter = (time) => {
    const result = [];
    var i = 0;
    var date = "";
    for(; i < time.length ; i++) {
      if(time[i] == 'T') {
        break;
      }
      date = date.concat(time[i]);
    }
    i++;
    var timestamp = "";
    for(; i < time.length ; i++) {
      if(time[i] == '.') {
        break;
      }
      timestamp = timestamp.concat(time[i]);
    }
    return [date, timestamp];
  }

  const requestsUpdate = () => {
    API.get("/httptrace").then((res) => {
      const requests_refresh = [];
      res["data"]["traces"].map((req) => {
        const new_req = {};
        const date_time = timeConverter(req["timestamp"]);
        new_req["date"] = date_time[0];
        new_req["time"] = date_time[1];
        new_req["method"] = req["request"]["method"];
        new_req["url"] = req["request"]["uri"];
        new_req["status"] = req["response"]["status"];
        new_req["timeTaken"] = req["timeTaken"];
        requests_refresh.push(new_req);
      });
      setRequests(requests_refresh);
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      requestsUpdate();
    }, 60000);
    return () => clearInterval(interval);
  });

  return (
    <div className='http-content'>
        <RequestList requests={requests} refreshList={requestsUpdate}/>
    </div>
  )
}

export default HttpContent