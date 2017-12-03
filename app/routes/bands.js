import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

var Band = EmberObject.extend({
  name:"",
});

export default Route.extend({

  model: function(){
    var ledZepellin1 = Band.create({ name: 'Led Zepellin1'});
    var ledZepellin2 = Band.create({ name: 'Led Zepellin2'});
    var ledZepellin3 = Band.create({ name: 'Led Zepellin3'});
    return [ledZepellin1, ledZepellin2, ledZepellin3]
  }


});
