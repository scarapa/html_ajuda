$.fn.extend({
    alertar: function () {
      return this.each(function () {
        alert($(this).text());
      });
    },
    exibirNoConsole: function () {
      return this.each(function () {
        console.log($(this).text());
      });
    }
  });

$(document).ready(function () {

    let pre = document.getElementsByClassName("codificacao")

    pl = pre.length;
    for (var i = 0; i < pl; i++) {
        pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
        var num = pre[i].innerHTML.split(/\n/).length;
        for (var j = 0; j < num; j++) {
            var line_num = pre[i].getElementsByTagName('span')[0];
            line_num.innerHTML += '<span>' + (j + 1) + '</span>';
        }
    }


    //ALTERAR PALAVRAS CORINGAS HTML
    $(".codigoHTML").each(function () {
        let dicionario = ["div"];
        for (let c = 0; c < dicionario.length; c++) {
            $(this).html(replaceAll($(this).html(), dicionario[c], "<span style='color:blue'>" + dicionario[c] + "</span>"));
        }
    });

    //ALTERAR PALAVRAS CORINGAS PHP
    $(".codigoPHP").each(function () {
        let dicionario = ["break","case","echo", "else", "else if", "elseif", "include", "extends","foreach","function", "if", "print_r", "return", "require","switch","this"];
        for (let c = 0; c < dicionario.length; c++) {
            $(this).html(replaceAll($(this).html(), dicionario[c], "<span style='color:blue;font-weight:bold;'>" + dicionario[c] + "</span>"));
        }
    });

    //ALTERAR PALAVRAS CORINGAS JS
    $(".codigoJS").each(function () {
        let dicionario = ["alert", "else", "else if", "elseif", "function", "if", "let", "print_r", "return", "this", "var"];
        for (let c = 0; c < dicionario.length; c++) {
            $(this).html(replaceAll($(this).html(),dicionario[c],"<span style='color:blue'>"+dicionario[c]+"</span>"));
        }
    });

    //ALTERAR PALAVRAS CORINGAS JS
    $(".codigoMySQL").each(function () {
        let dicionarioAzul = [" int","bigint","CURRENT_TIMESTAMP","timestamp","mediumtext"," time","varchar","last_insert_id"];
        for (let c = 0; c < dicionarioAzul.length; c++) {
            $(this).html(replaceAll($(this).html(),dicionarioAzul[c],"<span style='color:blue'>"+dicionarioAzul[c]+"</span>"));
        }
        
        let dicionarioVermelho = ["NOT NULL","DEFAULT","ON UPDATE"];
        for (let c = 0; c < dicionarioVermelho.length; c++) {
            $(this).html(replaceAll($(this).html(), dicionarioVermelho[c], "<span style='color:#800000'>"+dicionarioVermelho[c]+"</span>"));
        }
    });

});	