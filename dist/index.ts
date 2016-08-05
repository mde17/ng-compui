/// <reference path="../typings/index.d.ts" />

import './index.scss';

import * as angular from 'angular';

import { cuDialog } from './app/components/cuDialog';
import { cuButton } from './app/components/cuButton';

import { cuDialogDemo } from './app/demo/cuDialogDemo';

angular
  .module('app', [])
  .component('cuDialog', cuDialog)
  .component('cuButton', cuButton)
  
  .component('cuDialogDemo', cuDialogDemo);
