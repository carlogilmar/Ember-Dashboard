import Route from '@ember/routing/route';
import Band from 'rarwe/models/band';
import Song from 'rarwe/models/song';

export default Route.extend({

  model: function(){
    var blackDog = Song.create({ title:"Black Dog", band:"Led Zeppelling", rating:3});
    var yellowLedbetter= Song.create({ title:"Yellow Ledbetter", band:"Pearl Jam", rating:2});
    var pretender = Song.create({ title:"The Pretender", band:"Foo Fighters", rating:1});
    var daughter = Song.create({ title:"Daughter", band:"Pearl Jam", rating:3});
    var ledZepellin = Band.create({ name: 'Led Zepellin1', songs:[blackDog]});
    var pearlJam = Band.create({ name: 'Pearl Jam', songs:[yellowLedbetter, daughter]});
    var fooFighters = Band.create({ name: 'Foo Fighters', songs:[pretender]});
    return [ledZepellin, pearlJam, fooFighters]
  }


});
