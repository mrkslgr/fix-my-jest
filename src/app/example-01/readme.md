let ArrowFunctionComponent = class ArrowFunctionComponent extends abstract_with_constructor_component_1.AbstractWithConstructorComponent {
  constructor() {
    super(...arguments);
    
    this.doSomething = () => {
      console.log('i can do it');
    };
  }
  ngOnInit() {
  }


vs 

let ArrowFunctionComponent = class ArrowFunctionComponent extends abstract_with_constructor_component_1.AbstractWithConstructorComponent {
  ngOnInit() {
  }
};

vs 

let ArrowFunctionComponent = class ArrowFunctionComponent extends abstract_with_constructor_component_1.AbstractWithConstructorComponent {
  ngOnInit() {
  } 


  doSomething() {
    console.log('how');
  }

};
