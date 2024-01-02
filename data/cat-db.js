const cats = [
    {cats: 'Calico', isLarge: false},
    {cats: 'Siamese', isLarge: false},
    {cats: 'Mancoon', isLarge: true}
  ];

  module.exports = {
    getAll: function() {
        return cats;
    }
  };