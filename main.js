$(function() {


  //Валидация формы регистрации

  $(".form__data-field").change(function(){

    $(".form").validate({
      rules: {
        firstname: {
          required: true,
          noSpecialChars: true
        },
        surname: {
          required: true,
          noSpecialChars: true
        },
        email: {
          required: true,
          email: true
        },
        number: {
          required: true,
          checkMask: true
        }
      },
      messages: {
        firstname: "Имя не может содержать цифры и символы",
        surname: "Фамилия не может содержать цифры и символы",
        email: "Недопустимые символы.Это поле может содержать только латиницу",
        number: "Номер телефона может содержать только цифры"
      }
    });
    
      $.validator.addMethod("noSpecialChars", function(value, element) {
        return this.optional(element) || /^[а-яa-z\_]+$/i.test(value);
      });
      $.validator.addMethod("checkMask", function(value, element) {
        return /\d{3} \d{3} \d{2}-\d{2}/g.test(value); 
      });
      $('.form__number').mask("999 999 99-99");
  
  })

// Настройка переключения radio-button

  $(".way__block").on("click", function(){
    $(".way__hide").css("display", "");
    if($(".pickup").prop('checked')==true){
      let pickup = $(".way__pickup").text();
      let pickupSum = Number($(".way__pickup-sum").text());
      $(".table__cell-9").text(pickup);
      $(".table__cell-10").text(pickupSum);
      $(".way__hide").css("display", "block");

      $(".way__select").change(function(){
        $(".way__map").css("display", "none");
        if($(".way__select :selected").val()=="street"){
          $(".way__map2").css("display", "flex");
        } else if($(".way__select :selected").val()=="bridge"){
          $(".way__map1").css("display", "flex");
        }
      })
    } else if($(".courier").prop('checked')==true){
        let courier = $(".way__courier").text();
        let courierSum = Number($(".way__courier-sum").text());
        $(".table__cell-9").text(courier);
        $(".table__cell-10").text(courierSum);
    } else if($(".transport").prop('checked')==true){
      let transport = $(".way__transport").text();
      let transportSum = Number($(".way__transport-sum").text());
      $(".table__cell-9").text(transport);
      $(".table__cell-10").text(transportSum);
  }

    let sum1 = Number($(".table__cell-2").text());
    let sum2 = Number($(".table__cell-4").text());
    let discount = (sum1+sum2)/100*5;
    let sum3 = Number($(".table__cell-8").text());
    let sum4 = Number($(".table__cell-10").text());
    $(".table__cell-6").text(discount);
    $(".table__cell-8").text((sum1+sum2)-discount);
    $(".table__cell-12").text(sum3+sum4);
  });

//Преобразование спецсимволов в текстовом поле

$(".main-button__but").on("click", function(){
  let x = $(".field__text").val();
  $(".field__text").val(_.escape(x));
})

//Плавающий  блок

$('.table').stick_in_parent({
  offset_top: 20 
});

  });