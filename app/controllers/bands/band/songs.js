import Controller from '@ember/controller';
import {computed} from '@ember/object';

export default Controller.extend({
  actions: {
    noSongs: computed('model.songs.[]', function(){
      return this.get('model.songs.length') === 0;
    }),

    updateRating: function(params){
      var song = params.item, rating = params.rating;
      song.set('rating', rating);
    }
  }
});
