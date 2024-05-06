$(document).ready(function() {
    $('.leave-comment__post-btn').click(function() {
        var name = $('.leave-comment__name').val();
        var email = $('.leave-comment__email').val();
        var message = $('.leave-comment__message').val();

        if (name == '') {
            $('.leave-comment__name').css('border-color', 'red');
        }

        if (email == '') {
            $('.leave-comment__email').css('border-color', 'red');
        }

        if (message == '') {
            $('.leave-comment__message').css('border-color', 'red');
        }

        if (name && message && email) {
            var date = new Date().toLocaleDateString();
            var newComment = `
                <div class="comment">
                    <i class="fa-solid fa-user comment__avatar"></i>
                    <div>
                        <p class="comment__name-day"><span>${name}</span> - ${date}</p>
                        <p class="comment__text">${message}</p>
                    </div>
                </div>
                <hr class="hr-tag">
            `;
            $('.comments__list').prepend(newComment);

            var commentCount = $('.comment').length;
            if (commentCount > 4) {
                $('.load-more-btn').text('Hiển thị thêm');
                $('.comment').slice(3).hide();
                $('.hr-tag').slice(2).hide();
            } else {
                $('.load-more-btn').hide();
            }

            $('.leave-comment__name').val('');
            $('.leave-comment__email').val('');
            $('.leave-comment__message').val('');
        }
    });

    $('.leave-comment__name, .leave-comment__email, .leave-comment__message').on('input', function() {
        $(this).css('border-color', '');
    });

    $('.load-more-btn').on('click', function() {
        if ($(this).text() == 'Hiển thị thêm') {
            $('.comment').show();
            $('.hr-tag').show();
            $(this).text('Ẩn bớt đi');
        } else {
            $('.comment').slice(3).hide();
            $('.hr-tag').slice(2).hide();
            $(this).text('Hiển thị thêm');
        }
    });

    $('.comment').slice(3).hide();
    $('.hr-tag').slice(2).hide();
});
