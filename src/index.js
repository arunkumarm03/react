/**
 * A Material Design Admin Template
 * Copyright 2018 All Rights Reserved
 * Made Wih Love
 * Created By The Iron Network, LLC
 */
import React from 'react';
import { render } from 'react-dom';



import { MainApp } from './App';
// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

render(
  <MainApp />,
  document.getElementById('root')
);