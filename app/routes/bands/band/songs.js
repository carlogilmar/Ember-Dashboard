import Song from 'rarwe/models/song';
import Route from '@ember/routing/route';

export default Route.extend({
  model: function(){
    return this.modelFor('bands.band');
  },

  actions: {
    createSong: function(){
      var controller = this.get('controller');
      var band = this.modelFor('bands.band');
      var title = controller.get('title');

      var song = Song.create({ title:title, band: band});
      band.get('songs').pushObject(song);
      controller.set('title', "");
      alert("Cancion agregada");
    },

		updateRating: function(params){
			var song = params.item, rating = params.rating;
			song.set('rating', rating);
			alert("Rating Actualizado");
		}
  }
});
