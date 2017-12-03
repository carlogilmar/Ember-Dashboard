import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

var Song = EmberObject.extend({
  title:"",
  band:"",
  rating:0
});

export default Route.extend({

  model:function(){
    var blackDog1 = Song.create({
      title:'Black Dog1',
      band: 'Led Zepellin1',
      rating: 3
    });

    var blackDog2 = Song.create({
      title:'Black Dog2',
      band: 'Led Zepellin2',
      rating: 4
    });

    return [blackDog1, blackDog2];
  }

});
