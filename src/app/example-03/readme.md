let WithIputComponent = class WithIputComponent extends abstract_with_constructor_component_1.AbstractWithConstructorComponent {
  constructor() {
    /* istanbul ignore next */
    cov_1zoex2ywgl().f[0]++;
    cov_1zoex2ywgl().s[6]++;
    super(...arguments);

    /* istanbul ignore next */
    cov_1zoex2ywgl().s[7]++;
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
    /* istanbul ignore next */
    cov_1zoex2ywgl().f[0]++;
    cov_1zoex2ywgl().s[6]++;
    this.bar = true;
  }

};

/* istanbul ignore next */
cov_1zoex2ywgl().s[7]++;
WithIputComponent.propDecorators = {
  bar: [{
    type: core_1.Input
  }]
};
