// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 5, dy = 5, r = 30, color = "#0095DD";
let x1 = 800, y1 = 0, dx1 = 5, dy1 = 5, r1 = 10, color1 = "#FF5151";

// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function drawBall1(x1, y1, r1, color1)
{
    ctx.beginPath();
	ctx.arc(x1, y1, r1, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color1;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x = x + dx;
    y = y + dy;
	x1 = x1 + dx1;
    y1 = y1 + dy1;
    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    if(x < 0 || x > canvas.width)  dx = -dx;
	if(y < 0 || y > canvas.height) dy = -dy;
    if(x1 < 0 || x1 > canvas.width)  dx1 = -dx1;
	if(y1 < 0 || y1 > canvas.height) dy1 = -dy1;
    let R = r+r1;
	if((x-x1)*(x-x1)+(y-y1)*(y-y1) < (r+r1)*(r+r1))    
		[dx,dy,dx1,dy1] = [((r-r1)*dx+2*r1*dx1)/R,((r1-r)*dx1+2*r*dx)/R,((r-r1)*dy+2*r1*dy1)/R,((r1-r)*dy1+2*r*dy)/R];
	//[dx1,dy1,dx,dy]
	drawBall(x, y, r, color);
	drawBall1(x1, y1, r1, color1);
	
    requestAnimationFrame(draw);
}
draw();
