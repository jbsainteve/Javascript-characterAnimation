class Pumpkin {
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.rad = radius;
    }
    draw(ctx, openness){
        // ctx.fillStyle = 'gray';
        // ctx.beginPath();
        // on trace un cercle dans un premier temps qui délimite le pumpkin
        // mais un pumkin c'est plutôt carré
        // ctx.arc(this.x,this.y,this.rad,0,Math.PI*2);

        // On trace un rectangle, mais si on ne change pas le repère du canevas
        // ça va être une galère
        // ctx.rect(this.x-this.rad, this.y-this.rad, this.rad*2, this.rad*2);

        // Changement de repère (translate et scale)
        // le système de coordonnées devient simple
        // Faut penser du coup à faire un save et un restore
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.scale(this.rad, this.rad);

        // le coin supérieur gauche est maintenant à -1,-1 et inférieur droit +1,+1
        // Rappel : pour rect on indique le coin supérieur gauche et le déplacement sur x et y
        // d'où le 2,2
        // ctx.fillStyle = 'gray';
        // ctx.beginPath();
        // ctx.rect(-1,-1,+2,+2);
        // ctx.fill();

        this.#drawHead(ctx, openness);
        this.#drawEyes(ctx, openness);
        this.#drawNose(ctx, openness);
        this.#drawMouth(ctx, openness);
        
        ctx.restore();
    }
    #drawMouth(ctx, openness){
        ctx.save();
        ctx.translate(0,0.4);

        // On prend en compte le taux d'ouverture de la bouche via un scale
        // On ajoute 0.2 pour que la bouche ne disparaissent pas si openness=0
        // Quand la bouche s'ouvre, elle prend moins de largeur
        ctx.scale(1-openness*0.2, 0.2+openness);

        ctx.fillStyle='black';
        ctx.beginPath();
        ctx.moveTo(-0.6,0);
        ctx.lineTo(-0.4,-0.17);
        ctx.lineTo(-0.2,-0.08);
        ctx.lineTo(0,-0.2);
        ctx.lineTo(0.2,-0.08);
        ctx.lineTo(0.4,-0.17);
        ctx.lineTo(0.6,0);
        ctx.lineTo(0.4,0.17);
        ctx.lineTo(0.2,0.08);
        ctx.lineTo(0,0.2);
        ctx.lineTo(-0.2,0.08);
        ctx.lineTo(-0.4,0.17);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    #drawNose(ctx, openness){
        ctx.save();
        ctx.translate(-0.08,-0.05*openness);
        ctx.fillStyle='black';
        ctx.beginPath();
        ctx.moveTo(-0.05,0);
        ctx.lineTo(0.05,-0.05);
        ctx.lineTo(0.05,0.05);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    
        ctx.save();
        ctx.translate(0.08,-0.05*openness);
        ctx.fillStyle='black';
        ctx.beginPath();
        ctx.moveTo(0.05,0);
        ctx.lineTo(-0.05,-0.05);
        ctx.lineTo(-0.05,0.05);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    #drawEyes(ctx, openness){
        // L'oeil gauche sera à -0.4,-0.4
        // On fait une translation, donc faire un save avant
        ctx.save();
        ctx.translate(-0.4,-0.4);

        // Prise en compte du taux d'ouverture de la bouche : on réduit les yeux
        ctx.scale(1+openness*0.3, 1.2-openness);

        ctx.fillStyle='black';
        ctx.beginPath();
        ctx.moveTo(-0.15,0);
        ctx.lineTo(0.15,-0.15);
        ctx.lineTo(0.15,0.15);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        // L'oeil droit sera à +0.4,-0.4
        ctx.save();
        ctx.translate(0.4,-0.4);
        ctx.scale(1+openness*0.3, 1.2-openness);
        ctx.fillStyle='black';
        ctx.beginPath();
        ctx.moveTo(0.15,0);
        ctx.lineTo(-0.15,-0.15);
        ctx.lineTo(-0.15,0.15);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    #drawHead(ctx, openness){
        // Tracé d'une ellipse / méthode encore expérimentale
        // void ctx.ellipse(x, y, rayonX, rayonY, rotation, angleDébut, angleFin, antihoraire);

        ctx.fillStyle='green';
        ctx.beginPath();
        ctx.rect(-0.05,-1,0.1,0.1);
        ctx.fill();
                
        ctx.fillStyle='rgb(255,150,0)';
        ctx.beginPath();
        ctx.ellipse(-0.6,0.03,0.4,0.92,-openness*0.08,0,Math.PI*2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(+0.6,0.03,0.4,0.92,openness*0.08,0,Math.PI*2);
        ctx.fill();

        ctx.fillStyle='rgb(255,170,0)';
        ctx.beginPath();
        ctx.ellipse(-0.3,0.03,0.4,0.95,-openness*0.05,0,Math.PI*2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(+0.3,0.03,0.4,0.95,openness*0.05,0,Math.PI*2);
        ctx.fill();

        ctx.fillStyle='rgb(255,190,0)';
        ctx.beginPath();
        ctx.ellipse(0,0.03,0.4,0.97,0,0,Math.PI*2);
        ctx.fill();
    }
}