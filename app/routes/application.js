import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({

  model:function(){
    var blackDog = EmberObject.create({
      title:'Black Dog',
      band: 'Led Zepellin',
      rating: 3
    });

    return [blackDog];
  }

});
