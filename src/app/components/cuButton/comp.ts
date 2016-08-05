/** @ngInject */
function getTemplate($attrs: any):string {
  return `<button class="cu-button" ng-transclude type="${$attrs.type || 'button'}"></button>`;
};

export const cuButton = {
  template: getTemplate,
  transclude: true
};
