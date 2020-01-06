//check off specific todo by clicking


makeTippy();

/*
$('li').on('click', function(){
    if($(this).css('color') === 'rgb(128, 128, 128)'){
        $(this).css({
            'color':'black',
            'text-decoration':'none'
        });
    } else{
    $(this).css({
        'color':'rgb(128,128,128)',
        'text-decoration':'line-through'
    });
}
});*/

$('.thingsToDoList').on('click','.task-content', function(){
    $(this).toggleClass('check-off');
})

$('.alreadyDoneList').on('click','.task-content', function(){
    $(this).toggleClass('check-off');
})

$('.inProgressList').on('click','.task-content', function(){
    $(this).toggleClass('check-off');
})



/*------------------------------------------------------------
//to samo ale w czystym JS .check-off

let listItem = document.querySelectorAll('li');

for(let i = 0; i < listItem.length; i++){

    listItem[i].addEventListener('click', function(){

        this.classList.toggle("check-off");
    });
}

function toggleTask(){
    this.classList.toggle("check-off");
}
*/


//click on X to delete todo jQuery

$('.thingsToDoList').on('click','.delete-btn',function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
});

$('.alreadyDoneList').on('click','.delete-btn',function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
});

$('.inProgressList').on('click','.delete-btn',function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
});

//click blue on THINGS TO DO

$('.thingsToDoList').on('click','.progress-btn',function(){
    $(this).parent().fadeOut(500,function(){
        let inputText = $(this).text();
        $(this).remove();
        $('.inProgressList').append('<li><span class="delete-btn"><i class="fa fa-trash"></i></span><span class="negative-btn"><i class="fas fa-minus-circle"></i></span><span class="checked-btn"><i class="far fa-check-circle"></i></span><span class="task-content">'+ inputText + '</span></li>');
        makeTippy();
    })

});

// click green on THINGS TO DO

$('.thingsToDoList').on('click','.checked-btn',function(){
    $(this).parent().fadeOut(500,function(){
        let inputText = $(this).text();
        $(this).remove();
        $('.alreadyDoneList').append('<li><span class="delete-btn"><i class="fa fa-trash"></i></span><span class="negative-btn"><i class="fas fa-minus-circle"></i></span><span class="progress-btn"><i class="fas fa-spinner"></i></span><span class="task-content">'+ inputText + '</span></li>');
        makeTippy();
    })
});


//click yellow on THINGS IN PROGRESS

$('.inProgressList').on('click','.negative-btn',function(){
    $(this).parent().fadeOut(500,function(){
        let inputText = $(this).text();
        $(this).remove();
        $('.thingsToDoList').append('<li><span class="delete-btn"><i class="fa fa-trash"></i></span><span class="progress-btn"><i class="fas fa-spinner"></i></span><span class="checked-btn"><i class="far fa-check-circle"></i></span><span class="task-content">'+ inputText + '</span></li>');
        makeTippy();
    })
});

//click green on THINGS IN PROGRESS
$('.inProgressList').on('click','.checked-btn',function(){
    $(this).parent().fadeOut(500,function(){
        let inputText = $(this).text();
        $(this).remove();
        $('.alreadyDoneList').append('<li><span class="delete-btn"><i class="fa fa-trash"></i></span><span class="negative-btn"><i class="fas fa-minus-circle"></i></span><span class="progress-btn"><i class="fas fa-spinner"></i></span><span class="task-content">'+ inputText + '</span></li>');
        makeTippy();
    })
});

//click yellow on ALREADY DONE

$('.alreadyDoneList').on('click','.negative-btn',function(){
    $(this).parent().fadeOut(500,function(){
        let inputText = $(this).text();
        $(this).remove();
        $('.thingsToDoList').append('<li><span class="delete-btn"><i class="fa fa-trash"></i></span><span class="progress-btn"><i class="fas fa-spinner"></i></span><span class="checked-btn"><i class="far fa-check-circle"></i></span><span class="task-content">'+ inputText + '</span></li>');
        makeTippy();
    })
});

// click blue on ALREADY DONE

$('.alreadyDoneList').on('click','.progress-btn',function(){
    $(this).parent().fadeOut(500,function(){
        let inputText = $(this).text();
        $(this).remove();
        $('.inProgressList').append('<li><span class="delete-btn"><i class="fa fa-trash"></i></span><span class="negative-btn"><i class="fas fa-minus-circle"></i></span><span class="checked-btn"><i class="far fa-check-circle"></i></span><span class="task-content">'+ inputText + '</span></li>');
        makeTippy();
    })
});

//clear JS------------------------------------------
/*
let deleteBtn = document.querySelectorAll('.delete-btn');

for(let i = 0; i < deleteBtn.length; i++){
    deleteBtn[i].addEventListener('click', function(){
        this.parentNode.remove();
    });
}-------------------------------------------------------------
*/

//creation ToDos- jQuery
/*
$('.toDoInput1').on('keypress',function(event){
    if(event.which === 13){
        //grab text from input
        let inputText = $(this).val();
        $(this).val('');
        $(this).focus();
        $('.thingsToDoList').append('<li><span class="delete-btn"> <i class="fa fa-trash"></i> </span> <span class="task-content"> '+ inputText + '</span></li>');
        //create a new li and add to ul
    }
}) */

$('.plus-icon1').on('click', function(){
    let inputText = $('.toDoInput1').val();
    $('.toDoInput1').val('');
    $('.toDoInput1').focus();
    $('.thingsToDoList').append('<li><span class="delete-btn"><i class="fa fa-trash"></i></span><span class="progress-btn"><i class="fas fa-spinner"></i></span><span class="checked-btn"><i class="far fa-check-circle"></i></span><span class="task-content">'+ inputText + '</span></li>');
    makeTippy();
})

$('.plus-icon2').on('click', function(){
    let inputText = $('.toDoInput2').val();
    $('.toDoInput2').val('');
    $('.toDoInput2').focus();
    $('.alreadyDoneList').append('<li><span class="delete-btn"><i class="fa fa-trash"></i></span><span class="negative-btn"><i class="fas fa-minus-circle"></i></span><span class="progress-btn"><i class="fas fa-spinner"></i></span><span class="task-content">'+ inputText + '</span></li>');
    makeTippy();
})

$('.plus-icon3').on('click', function(){
    let inputText = $('.toDoInput3').val();
    $('.toDoInput3').val('');
    $('.toDoInput3').focus();
    $('.inProgressList').append('<li><span class="delete-btn"><i class="fa fa-trash"></i></span><span class="negative-btn"><i class="fas fa-minus-circle"></i></span><span class="checked-btn"><i class="far fa-check-circle"></i></span><span class="task-content">'+ inputText + '</span></li>');
    makeTippy();
})


function makeTippy(){
tippy('.delete-btn', {
    content: 'Kliknij, aby usunąć.'

  });

  tippy('.plus-icon1', {
    content: 'Kliknij, aby dodać.'
  });

  tippy('.plus-icon2', {
    content: 'Kliknij, aby dodać.'
  });

  tippy('.plus-icon3', {
    content: 'Kliknij, aby dodać.'
  });

  tippy('.negative-btn', {
    content: 'Kliknij, aby przesunąć do "do zrobienia".'
  });

  tippy('.progress-btn', {
    content: 'Kliknij, aby przesunąć do "w trakcie".'
  });

  tippy('.checked-btn', {
    content: 'Kliknij, aby przesunąć do "wykonane".'
  });

  tippy('.toDoInput1', {
    content: 'Wprowadź treść zadania.'
  });

  tippy('.toDoInput2', {
    content: 'Wprowadź treść zadania.'
  });

  tippy('.toDoInput3', {
    content: 'Wprowadź treść zadania.'
  });
}

/*
let toDoInput = document.querySelector("#toDoInput");
toDoInput.addEventListener('keydown', event =>{
    if (event.keyCode === 13){
    }
//toggle input area
$('.plus-icon').on('click',function(){
    $('.toDoInput').fadeToggle();
});
});

*/