/// <reference path="../typings/index.d.ts" />

import './index.scss';

import * as angular from 'angular';
import {techsModule} from './app/techs/index';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import { cuDialog } from './app/components/cuDialog/comp';
import { cuButton } from './app/components/cuButton/comp';
import { cuDialogDemo } from './app/demo/cuDialogDemo/comp';

angular
  .module('app', [techsModule])
  .component('cuDialog', cuDialog)
  .component('cuButton', cuButton)
  .component('cuDialogDemo', cuDialogDemo)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
