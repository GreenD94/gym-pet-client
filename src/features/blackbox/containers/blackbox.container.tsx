'use client';

import React from 'react';
import { SERVER_ACTIONS_INFO } from '../constants/blackbox.constants';
import { BlackboxProvider, useBlackboxContext } from '../context/BlackboxContext';
import { Navigation } from '../components/Navigation/Navigation';
import { ActionInfo } from '../components/ActionInfo/ActionInfo';
import { LoginForm } from '../components/Forms/LoginForm';
import { RegisterForm } from '../components/Forms/RegisterForm';
import { SeedForm } from '../components/Forms/SeedForm';
import { Results } from '../components/Results/Results';
import { BlackboxLayout } from '../components/Layout/BlackboxLayout';

function BlackboxContent() {
  const {
    formData,
    result,
    loading,
    activeAction,
    setActiveAction,
    updateFormData,
    handleLogin,
    handleRegister,
    handleSeed,
  } = useBlackboxContext();

  return (
    <>
      <Navigation
        activeAction={activeAction}
        onActionChange={setActiveAction}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Action Info */}
        <div>
          <ActionInfo info={SERVER_ACTIONS_INFO[activeAction]} />
        </div>

        {/* Action Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {activeAction === 'login' && (
            <LoginForm
              email={formData.loginEmail}
              password={formData.loginPassword}
              loading={loading}
              onEmailChange={(value) => updateFormData({ loginEmail: value })}
              onPasswordChange={(value) => updateFormData({ loginPassword: value })}
              onSubmit={handleLogin}
            />
          )}

          {activeAction === 'register' && (
            <RegisterForm
              email={formData.registerEmail}
              password={formData.registerPassword}
              role={formData.registerRole}
              loading={loading}
              onEmailChange={(value) => updateFormData({ registerEmail: value })}
              onPasswordChange={(value) => updateFormData({ registerPassword: value })}
              onRoleChange={(value) => updateFormData({ registerRole: value })}
              onSubmit={handleRegister}
            />
          )}

          {activeAction === 'seed' && (
            <SeedForm
              loading={loading}
              onSubmit={handleSeed}
            />
          )}

          <Results result={result} />
        </div>
      </div>
    </>
  );
}

export function BlackboxContainer() {
  return (
    <BlackboxProvider>
      <BlackboxLayout>
        <BlackboxContent />
      </BlackboxLayout>
    </BlackboxProvider>
  );
} 