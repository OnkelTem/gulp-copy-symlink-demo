# gulp-copy-symlink-demo

Demonstrates supposingly incorrect files permissions handling while copying files.

This demo repository implements a simple task which copies a file with name `file1` from `src/` to `tmp/`. The thing is `file1` is a symlink to `file1source`, and the copied target gets permissions from a symlink, not from a file.

Demo:

```
$ gulp copy
[13:35:19] Using gulpfile /../gulp-copy-symlink-demo/gulpfile.js
[13:35:19] Starting 'copy'...
[13:35:19] Finished 'copy' after 15 ms
$ ls -la tmp
total 8
drwxrwsr-x 2 user user 4096 Sep 24 13:34 .
drwxr-sr-x 5 user user 4096 Sep 24 13:34 ..
-rwxrwxrwx 1 user user    0 Sep 24 13:35 file1
```

as we see, `file1` gets `777` permissions.


**UPDATE**

It seems like the bug is nailed here: https://github.com/gulpjs/gulp/issues/1273#issuecomment-143546762
