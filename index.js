var MatrixReader = function(text){
  if(this.constructor != MatrixReader) return new MatrixReader().read(text);
  this.matrix = {};
  this.parsingOrder = [];
  if(text != undefined){
    this.read(text);
  }
  return this;
}

module.exports = MatrixReader;

MatrixReader.prototype.read = function(text){
  text.split("\n").forEach(function(el){
    this.readLine(el);
  }.bind(this));
  this.buildMatrix();
  return this.matrix;
};

MatrixReader.prototype.readLine = function(line){
  var c = line.charAt(0);
  if (c == '#') {
    return;
  } else {
    this.parsingOrder.push(c);
    var intStr = line.substring(1);
    var ints = intStr.split(/\s+/)
    .filter(function(e) { return e.length > 0 })
    .map(function(e){ return parseInt(e)}); 

    var m = {};
    for(var i = 0; i < ints.length; i++){
      m[this.parsingOrder[i]] = ints[i];
    }
    this.matrix[c] = m;
  }
}

MatrixReader.prototype.toString = function(){
  return MatrixReader.toString(this.matrix);
}

MatrixReader.toString = function(matrix){
    var lines = [];
    var max = 1;
    for(var key in matrix){
      var line = key;
      var keys = Object.keys(matrix[key]);
      for(var i = 0; i < max;i++){
        line += "\t" + matrix[key][keys[i]];
      }
      lines.push(line);
      max++;
    }
    return lines.join("\n");
}

/**
 * faster access time
 */
MatrixReader.prototype.buildMatrix = function() {
  for(var i = this.parsingOrder.length - 1; i >= 0 ; i--){
    var curC = this.parsingOrder[i];
    var map = this.matrix[curC];
    for(var key in map){
      this.matrix[key][curC] = map[key];
    }
  }
}
