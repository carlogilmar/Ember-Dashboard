//import DS from 'ember-data';
import EmberObject, {computed} from '@ember/object';

//export default DS.Model.extend({
export default EmberObject.extend({
  name:"",
  slug: computed('name', function(){
    return this.get('name').dasherize();
  })

});
