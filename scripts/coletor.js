class Shurikens {

	constructor(runtime)
	{
		 this.txt_shuriken = runtime.objects.txt_shuriken.getFirstInstance();
		 this.var_shuriken = runtime.globalVars.Shurikens;
	}
	
	Add()
	{
		this.var_shuriken+=3;
		this.Mostra();
		return this.var_shuriken;
	}
	
	Sub()
	{
		this.var_shuriken--;
		this.Mostra();
		return this.var_shuriken;
	}
	
	Mostra()
	{
		this.txt_shuriken.text =`${this.var_shuriken}`;
	}
	
}
