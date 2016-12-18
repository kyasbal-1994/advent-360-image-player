gr.registerComponent("Spin",{
	attributes:{
		speed:{
			default:1.0,
			converter:"Number"
		}
	},
	$awake:function(){
		this.phi = 0;
		$(".canvas-container")[0].addEventListener("wheel",(function(e){
			this.phi += e.deltaY;
			e.preventDefault();
		}).bind(this));
	},
	$update:function(){
		this.node.setAttribute("rotation", "y(" + this.phi + ")");
		this.phi+= this.getAttribute("speed");
	}
});

$(function(){
	var c = gr("#image-360"); // キャンバス操作用のインターフェース
	var fullscreen = false;
	$("#fullscreen").on("click",function(){
		fullscreen = !fullscreen;
		c("goml").setAttribute("fullscreen",fullscreen);
	});
	var speed = 0.2;
	$("#start-stop").on("click",function(){
		var spin = c("camera").single().getComponent("Spin");
		speed = speed > 0 ? 0 : 0.2;
		spin.setAttribute("speed",speed);
	});
});