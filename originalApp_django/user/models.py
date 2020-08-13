from django.db import models
from django.contrib.auth.models import (
    BaseUserManager,
    AbstractBaseUser,
    _user_has_perm
)
from django.core import validators
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
from master.models import Occupation
from datetime import datetime
from django.contrib.auth.models import PermissionsMixin

class UserManager(BaseUserManager):
    """
    ユーザーマネージャー
    """
    def create_user(self, email, occupation_id, password=None, **user_data):
        """
        ユーザーを作成
        """
        if not email:
            raise ValueError('Users must have an email address')

        # if occupation_id in user_data:
        #     occupation_id = user_data.pop("occupation_id")
        # else:
        #     occupation_id = 1
        try:
            occupation = Occupation.objects.get(id=occupation_id)
        except Occupation.DoesNotExist:
            occupation = None

        user = User(
            email=self.normalize_email(email),
            occupation_id=occupation,
            **user_data
            )
        print("ok")

        user.set_password(password)
        # user.save(using=self._db)
        print("A"*100)
        print(user)
        print(email)
        print(occupation)
        print(user_data)
        user.save()
        return user

    def create_superuser(self, **user_data):
        """
        スーパーユーザーを作成
        """
        return self.create_user(is_superuser=True, is_staff=True, occupation_id=1, **user_data)

class User(AbstractBaseUser, PermissionsMixin):
    id            = models.AutoField('ID', primary_key=True)
    occupation_id = models.ForeignKey(Occupation, null=False, blank=False, on_delete=models.PROTECT)
    username      = models.CharField('ニックネーム', max_length=255, null=False)
    email         = models.EmailField(verbose_name='email address', max_length=255, unique=True, null=False)
    birthday      = models.DateField('生年月日', null=True, blank=True)
    address       = models.CharField('現住所', max_length=140, null=True, blank=True)
    password      = models.CharField('パスワード', max_length=140, null=False)
    is_tmp_user   = models.BooleanField(default=False)
    is_staff      = models.BooleanField(default=False)
    is_superuser  = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.id} / {self.username}"

    @property
    def age(self):
        if self.birthday==None:
            return -1

        year = self.birthday.year
        month = self.birthday.month
        day = self.birthday.day
        now = datetime.now()

        #今日の日付
        today_year  = now.year
        today_month = now.month
        today_day   = now.day

        #月が過ぎた場合
        if today_month > month :
            is_passed = True
        #月が同じ場合
        elif today_month == month :
            is_passed = today_day >= day
        else :
            is_passed = False

        if is_passed :
            age = today_year - year
        else :
            age = today_year - year - 1

        return age





# Create your models here.
