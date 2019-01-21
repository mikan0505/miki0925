	gp = null;   // GamePanel オブジェクト
	
				//
				// GamePanel の開始
				//
	function gp_start()
	{
						// GamePanel オブジェクト
		gp = new GamePanel();
						// 描画
		var timerID = setTimeout("gp.draw()", 100);
						// ボタンの表示制御
		document.getElementById('method').style.display = "none";
		document.getElementById('start').style.display = "none";
		document.getElementById('first').style.display = "none";
		document.getElementById('finish').style.display = "none";
    }
				//
				// GamePanel オブジェクト（プロパティ）
				//
	function GamePanel()
	{
	this.sz = 50;   // コマの大きさ
		this.gap = 10;   // コマ間のギャップ
		this.i_state = new Array();   // 盤面の初期状態
		this.i_state[0] = new Array(1, 2, 3);
		this.i_state[1] = new Array(8, 0, 4);
		this.i_state[2] = new Array(7, 6, 5);
		this.g_state = new Array();   // 盤面の目標状態
		this.g_state[0] = new Array(1, 2, 3);
		this.g_state[1] = new Array(8, 0, 4);
		this.g_state[2] = new Array(7, 6, 5);
		this.img = new Array;   // コマの画像の読み込み
		for (var i1 = 1; i1 <= 8; i1++) {
			this.img[i1-1] = new Image();
			this.img[i1-1].src = "image/" + i1 + ".gif";
		}
		return this;
	}
				//
				// GamePanel オブジェクト（メソッド draw）
				//
	GamePanel.prototype.draw = function()
	{
						// キャンバスのクリア
		mp.ctx.clearRect(0, 0, mp.canvas.width, mp.canvas.height);
						// 描画
		for (var i1 = 0; i1 < 3; i1++) {
			for (var i2 = 0; i2 < 3; i2++) {
				var k = gp.i_state[i1][i2] - 1;
				if (k >= 0)
					mp.ctx.drawImage(gp.img[k], gp.gap+i2*(gp.gap+gp.sz), gp.gap+i1*(gp.gap+gp.sz));
			}
		}
	}