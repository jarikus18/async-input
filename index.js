          if (pathname == urlPage) {

// Калькулятор с 2-мя значениями

            $("input.input-calc-height").on('input', function() {
              $("input.input-calc-height").val($(this).val());
              $('.result').trigger('input');
            });

            $("input.input-calc").on('input', function() {
                $("input.input-calc").val($(this).val());

                        $("form.calculator-form").on('input', function() {

                                  var userCount = $("input.input-calc", this).val();
                                  var userCountHeight = $("input.input-calc-height", this).val()
                                  var price = $('input[data-catprice]', this).val();
                                  var catotrez = $('input[data-catotrez]', this).val();
                                  var catpricefurnitura = $('input[data-catpricefurnitura]', this).val();

                                  var result = (userCountHeight * 0.01) * (userCount * 0.01) * price
                                      + userCount * 0.01 * catotrez
                                      + userCount * 0.01 * catpricefurnitura;
                    
                                  if ($("input[data-attrh]").val() > 0) { 
                                      $('.result', this).html( Math.round(result) + ' грн' );
                                  }
                                  else if ($("input[data-attrh]").val() == 0)  {
                                      $('.result', this).html( '150 грн' );
                                  }
                                   else { 
                                       $('.result', this).html( '<span style="color: red">Введите число</span>' );
                                  }
                    });
                    $('.result').trigger('input');
                });
           }
// Калькулятор с 1-м значением

            else {
                    $("input.input-calc").on('input', function() {
                       $("input.input-calc").val($(this).val());

                          $("form.calculator-form").on('input', function() {

                                  var userCount = $("input.input-calc", this).val();
                                  var price = $('input[data-catprice]', this).val();
                                  var catotrez = $('input[data-catotrez]', this).val();
                                  var catpricefurnitura = $('input[data-catpricefurnitura]', this).val();

                                  var result = userCount * 0.01 * price
                                      + userCount * 0.01 * catotrez
                                      + userCount * 0.01 * catpricefurnitura;
                                  
                                    if ($("input[data-attr]", this).val() > 0) { 
                                        $('.result', this).text( Math.round(result) + ' грн' );
                                    }
                                    else if ($("input[data-attr]", this).val() == 0)  {
                                        $('.result', this).text( '150 грн' );
                                    }
                                     else { 
                                         $('.result', this).text( '<span style="color: red">Введите число</span>' );
                                    };
                          });
                          $('.result').trigger('input');
                         });
                        
                    };
