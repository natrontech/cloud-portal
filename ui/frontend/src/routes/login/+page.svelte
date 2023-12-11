<script lang="ts">
  import { goto } from "$app/navigation";
  import { login } from "$lib/pocketbase";
  import { alertOnFailure } from "$lib/pocketbase/ui";
  import toast from "svelte-french-toast";
  import { Label, Input, Checkbox, Button } from "flowbite-svelte";

  const DEFAULTS = {
    email: "",
    password: ""
  };
  let user = { ...DEFAULTS };
  let loading = false;

  async function submit() {
    loading = true;
    await alertOnFailure(async function () {
      await login(user.email, user.password);
      toast.success("Logged in successfully!");
      goto("/app");
    }).finally(() => {
      loading = false;
    });
  }
</script>

<div
  class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-secondary dark:to-secondarydark"
>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
    <div class="bg-background dark:bg-gray-800 px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <div class="sm:mx-auto sm:w-full sm:max-w-md mb-5">
        <img
          class="h-10 w-auto mx-auto"
          src="/images/logo_typo_black.png"
          alt="logo"
        />
      </div>
      <form class="space-y-6" on:submit|preventDefault={submit} method="POST">
        <div>
          <Label class="space-y-2">
            <span>Email address</span>
            <Input type="email" size="md" bind:value={user.email} />
          </Label>
        </div>

        <div>
          <Label class="space-y-2">
            <span>Password</span>
            <Input type="password" size="md" bind:value={user.password} />
          </Label>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <Checkbox>Remember me</Checkbox>
          </div>

          <div class="text-sm leading-6">
            <a href="#" class="font-medium dark:text-gray-200">Forgot password?</a>
          </div>
        </div>

        <div>
          <Button class="w-full" color="alternative" type="submit" on:submit={() => submit()}>Log in</Button>
        </div>
      </form>
    </div>
  </div>
</div>
