let WithIputComponent = class WithIputComponent extends abstract_with_constructor_component_1.AbstractWithConstructorComponent {
  constructor() {
    super(...arguments);

    this.bar = false;
  }

  ngOnInit() {
    /* istanbul ignore next */
    cov_1zoex2ywgl().f[1]++;
    cov_1zoex2ywgl().s[8]++;
    this.bar = true;
  }

};


vs

let WithIputComponent = class WithIputComponent extends abstract_with_constructor_component_1.AbstractWithConstructorComponent {
  ngOnInit() {
    this.bar = true;
  }

};

WithIputComponent.propDecorators = {
  bar: [{
    type: core_1.Input
  }]
};
