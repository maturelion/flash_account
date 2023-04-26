from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin
# from import_export.admin import ImportExportModelAdmin


class UserAdminConfig(UserAdmin):
    model = User
    search_fields = (
        "email",
        "username",
    )
    list_filter = (
        "is_active",
        "is_staff",
    )
    ordering = ("-date_joined",)
    list_display = (
        "username",
        "slug",
        "email",
        "date_joined",
        "last_login",
    )

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "slug",
                    "email",
                    "username",
                    "first_name",
                    "last_name",
                    "password",
                )
            },
        ),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                )
            },
        ),
        ("Activity", {"fields": ("last_login",)}),
    )

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "email",
                    "username",
                    "password1",
                    "password2",
                    "first_name",
                    "last_name",
                    "is_active",
                    "is_staff",
                ),
            },
        ),
    )


admin.site.register(User, UserAdminConfig)
