paper.install(window);

window.onload = function() {
    paper.setup('fCanvas');
    
    var n1 = 8;
    var n2 = 8;
    var n3 = 6;
    
    var polyn1 = new Path.RegularPolygon([220, 250], n1, 200);
    polyn1.strokeColor = 'black';
    var polyn1_2 = new Path.RegularPolygon([220, 250], n1, 180);
    polyn1_2.strokeColor = '#5f5f5f';
    
    var polyn2 = new Path.RegularPolygon([380, 200], n2, 140);
    polyn2.strokeColor = '#E64C5A';
    var polyn2_2 = new Path.RegularPolygon([380, 200], n2, 120);
    polyn2_2.strokeColor = '#F0707B';

    var polyn3 = new Path.RegularPolygon([225, 255], n3, 200);
    polyn1.strokeColor = 'black';
    var polyn3_2 = new Path.RegularPolygon([225, 255], n3, 180);
    polyn3_2.strokeColor = '#84DFC8';
    
    view.onFrame = function(event) {
        
        polyn1.rotate(.15);
        polyn1_2.rotate(.1);
        
        polyn2.rotate(-.15);
        polyn2_2.rotate(-.1);

        polyn3.rotate(.15);
        polyn3_2.rotate(.1);
    }
}
