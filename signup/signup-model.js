export async function createUser(email, password) {
  try {
    const response = await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: email,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage.message || "Error creating user");
    }
  } catch (error) {
    throw new Error(error.message || "Error connecting to server");
  }
}
