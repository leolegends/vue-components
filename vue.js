atualiza_assinatura = Vue.component('atualiza-assinatura', {
	prop: ['url'],
	template: `
	<button type="button" class="btn btn-primary" v-on:click="atualizar">Atualizar informações</button>
	`,
	methods: {
		atualizar: function (event){
			nome = $("#nome_assinatura").val();
			valor = $("#valor_assinatura").val().replace(/[^0-9.]/, "") || 0;
			if(nome != "" && valor != ""){
				console.log(nome);
				console.log(valor);		
				let link = this.$vnode.data.attrs.url;
				let token = this.$vnode.data.attrs.token;

			$.post(link, {nome: nome, valor: valor, _token: token}).done(function(){$.toast({text: '<h4>Informações de Pagamento Atualizadas!</h4>', showHideTransition: 'slide', position: 'bottom-center', bgColor: '#449d44', textAlign: 'center', textColor: 'white', icon: 'success', loaderBg: '#fff', allowToastClose: false, });}).fail(function(){});

			}
		}
	}

});

new Vue({
	el: "#vue",
	components: {
		tag_personalizada,
		elemento,
		cardHome,
		checkbox_personalizado,
		atualiza_assinatura
	}

});
